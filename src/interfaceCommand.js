import arg from 'arg';
import inquirer from 'inquirer';
import { templateGrabber } from "./main.js";

export async function interfaceCommand(args) {
    let opts = argumentOptionsParser(args);
    opts = await inquireUndeclaredItems(opts);
    await templateGrabber(opts);
}

function argumentOptionsParser(rawArguments) {
    let args = arg(
        {
            "--git": Boolean,
            "--help": Boolean,
            "--yes": Boolean,
            "--install": Boolean,
            "--g": "--git",
            "--h": "--help",
            "--y": "--yes",
            "--i": "--install",
        },
        {
            argv: rawArguments.slice(2),
        }
    );

    return {
        template: args._[0],
        skipPrompts: args["--yes"] || false,
        git: args["--git"] || false,
        runInstall: args["--install"] || false,
    };
}

async function inquireUndeclaredItems(opts) {
    const defaultTemplate = "React";
    if (opts.skipPrompts) {
        return {
            ...opts,
            template: opts.template || defaultTemplate,
        };
    }

    const displayOptions = [];
    if (!opts.template) {
        displayOptions.push({
            type: "list",
            name: "template",
            message: "What template would you like to use?",
            choices: ["React", "viteReact", "JavaScript" , "react-redux", "nextjs" ],
            default: defaultTemplate,
        });
    }
    if (!opts.git) {
        displayOptions.push({
            type: "confirm",
            name: "git",
            message: "Would you like to initialize a git repository?",
            default: false,
        });
    }

    const useInput = await inquirer.prompt(displayOptions);
    return {
        ...opts,
        template: opts.template || useInput.template,
        git: opts.git || useInput.git,
    };
}
