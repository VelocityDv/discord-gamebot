import { CommandInteraction } from "discord.js";
import { Discord, Slash, SlashOption, SlashChoice } from "discordx";

enum TextChoices {
  // WhatDiscordShows = value
  Hello = "Hello",
  "Good Bye" = "GoodBye",
}

@Discord()
class choicesExample {
  @Slash("choose")
  async choose(
    @SlashChoice("Human", "human")
    @SlashChoice("Astronaut", "astro")
    @SlashChoice("Dev", "dev")
    @SlashOption("what", { description: "What are you?", required: true })
    what: string,
    interaction: CommandInteraction
  ) {
    interaction.reply(what);
  }

  @Slash("choice")
  async choice(
    @SlashChoice(TextChoices)
    @SlashChoice("How are you", "question")
    @SlashOption("text", { required: true })
    what: string,
    interaction: CommandInteraction
  ) {
    interaction.reply(what);
  }
}
