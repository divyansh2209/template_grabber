import fs from "fs";
import path from "path";
import chalk from "chalk";
import ncp from "ncp";
import { promisify } from "util";
import { fileURLToPath } from 'url';
import { projectInstall } from "pkg-install";
import execa from 'execa';
import Listr from "listr";

const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyProjectTemplateFiles(opts) {
    return copy(opts.templateDirectory, opts.targetDirectory, {
        clobber: false,
    });
}

async function initializeGit(opts) {
    const result = await execa("git", ["init"], {
        cwd: opts.targetDirectory,
    });
    if (result.failed) {
        console.error(chalk.red("Failed to initialize git repository"));
        return Promise.reject(
            new Error(`Failed to initialize git repository: ${result.stderr}`)
        );
        process.exit(1);
    }
    return;
}


export async function templateGrabber(opts) {
    opts = {
        ...opts,
        targetDirectory: opts.targetDirectory || process.cwd(),
    };

    // Use fileURLToPath and path.dirname to ensure correct path handling
    const fullPathName = fileURLToPath(import.meta.url);
    const dirName = path.dirname(fullPathName);
    const templateDir = path.resolve(dirName, "../projectTemplates", opts.template.toLowerCase());

    opts.templateDirectory = templateDir;

    console.log("fullPathName: ", fullPathName)
    console.log("dirName: ", dirName)
    console.log("templateDir: ", templateDir)

    try {
        await access(templateDir, fs.constants.R_OK);
    } catch (err) {
        console.log(chalk.red(`Template directory ${templateDir} does not exist`));
        console.log(err);
        process.exit(1);
    }


    const runningTask = new Listr([
        {
            title: "Hold up!! Copying project files...",
            task: async () => await copyProjectTemplateFiles(opts),
        },
        {
            title: "Waitt!!! Initializing git repository....",
            task: async () => await initializeGit(opts),
            enabled: () => opts.git,
        },
        {
            title: "Just Little More!! Installing dependencies....",
            task: async () =>
                await projectInstall({
                    cwd: opts.targetDirectory,
                }),
            skip: () =>
                !opts.runInstall ? "--install to install all dependencies" : undefined,
        },
    ]);
    
    await runningTask.run();

    // console.log("Copying project files....");
    // await copyProjectTemplateFiles(opts);

    console.log(chalk.green(`Creating project from template ${opts.template}`));
    return true;
}




