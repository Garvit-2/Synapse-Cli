#!/usr/bin/env node

import dotenv from "dotenv";

import chalk from "chalk";
import figlet from "figlet";

import { Command } from "commander";

import { login } from "./commands/auth/login.js";
// import { wakeUp } from "./commands/ai/wakeUp.js";

dotenv.config();

async function main() {
  // Display banner
  console.log(
    chalk.cyan(
      figlet.textSync("Synapse CLI", {
        font: "Standard",
        horizontalLayout: "default",
      })
    )
  );
  console.log(chalk.green("A Cli based AI Agent for Developers.\n"));

  const program = new Command("Synapse");

  program
    .version("0.0.1")
    .description("Synapse CLI - Device Flow Authentication");

//   // Add commands
//   program.addCommand(wakeUp);
  program.addCommand(login);
//   program.addCommand(logout);
//   program.addCommand(whoami);

  // Default action shows help
  program.action(() => {
    program.help();
  });



  program.parse();
}

main().catch((error) => {
  console.error(chalk.red("Error  in running Synapse CLI:"), error);
  process.exit(1);
});
