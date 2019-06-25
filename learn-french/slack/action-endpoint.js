const { WebClient } = require("@slack/web-api");

// Read a token from the environment variables
const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);

module.exports = async (req, res) => {
  if (req.body && req.body.challenge) {
    res.status(200).send(req.body.challenge);
    return;
  }

  if (req.body.command === "/learn") {
    return handleLearnCommand(req, res);
  } else if (req.body.payload) {
    return handleBlockActions(req, res);
  }

  // always acknowledge
  res.status(200).end();
};

async function handleLearnCommand(req, res) {
  const userId = req.body.user_id;
  const { channel } = await web.im.open({
    user: userId
  });

  await web.chat.postMessage({
    channel: channel.id,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*fr* - Bonjour"
        }
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Translate",
              emoji: true
            },
            value: "fr-Bonjour"
          }
        ]
      }
    ]
  });

  res.status(200).end();
}

async function handleBlockActions(req, res) {
  const payload = JSON.parse(req.body.payload);
  const { actions, channel } = payload;
  if (!actions) {
    return;
  }

  if (!actions.length === 1) {
    throw new Error("Unknown actions!");
  }

  const value = actions[0].value;

  console.log("posting...");
  await web.chat.postMessage({
    channel: channel.id,
    blocks
  });

  res.status(200).end();
}

const blocks = [
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: "*en* - Hello"
    }
  },
  {
    type: "divider"
  },
  {
    type: "section",
    text: {
      type: "mrkdwn",
      text: "Did you remember?"
    }
  },
  {
    type: "actions",
    elements: [
      {
        type: "button",
        text: {
          type: "plain_text",
          emoji: true,
          text: "Yes"
        },
        style: "primary",
        value: "click_me_123"
      },
      {
        type: "button",
        text: {
          type: "plain_text",
          emoji: true,
          text: "No"
        },
        style: "danger",
        value: "click_me_123"
      }
    ]
  }
];
