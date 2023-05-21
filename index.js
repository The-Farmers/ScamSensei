import { BingChat } from "bing-chat";
import MailListener from "mail-listener2";
import Nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const mailTransporter = Nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yatchpartyforever@gmail.com",
    pass: process.env.GMAIL_PASSWORD,
  },
});

const mailListener = new MailListener({
  username: "yatchpartyforever@gmail.com",
  password: process.env.GMAIL_PASSWORD,
  host: "imap.gmail.com",
  port: 993, // imap port
  tls: true,
  connTimeout: 10000, // Default by node-imap
  authTimeout: 5000, // Default by node-imap,
  debug: console.log, // Or your custom function with only one incoming argument. Default: null
  tlsOptions: { rejectUnauthorized: false },
  mailbox: "INBOX", // mailbox to monitor
  searchFilter: ["UNSEEN"], // , "FLAGGED" the search filter being used after an IDLE notification has been retrieved
  markSeen: true, // all fetched email willbe marked as seen and not fetched next time
  fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`,
  mailParserOptions: { streamAttachments: true }, // options to be passed to mailParser lib.
  attachments: true, // download attachments as they are encountered to the project directory
  attachmentOptions: { directory: "attachments/" }, // specify a download directory for attachments
});

mailListener.start(); // start listening

// stop listening
//mailListener.stop();

mailListener.on("server:connected", function () {
  console.log("imapConnected");
});

mailListener.on("server:disconnected", function () {
  console.log("imapDisconnected");
});

mailListener.on("error", function (err) {
  console.log(err);
});

mailListener.on("mail", async function (mail, seqno, attributes) {
  // do something with mail object including attachments
  // console.log("emailParsed", mail);
  console.log(mail);
  const senderEmail = mail.headers["return-path"];
  const messageId = mail.headers["message-id"];
  const subject = mail.headers["subject"];
  console.log("Sender email:", senderEmail);
  console.log("Content:", mail.text);

  const api = new BingChat({
    cookie: process.env.BING_CHAT_COOKIE,
  });

  const res = await api.sendMessage("Is this a scam email?\n\n" + mail.text);

  console.log(res.text);
  // mail processing code goes here

  let mailDetails = {
    from: "scamchat@gmail.com",
    to: senderEmail,
    inReplyTo: messageId,
    subject: "Re: " + subject,
    text: res.text,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
});

mailListener.on("attachment", function (attachment) {
  console.log(attachment.path);
});
