import { Probot } from "probot";

export default (app: Probot) => {
  app.log.info("Yay! The app was loaded!");

  app.on("issues.opened", async (context) => {
    app.log.info("An issue was edited");
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    await context.octokit.issues.createComment(issueComment);
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
