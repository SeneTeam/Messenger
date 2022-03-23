const Sequelize = require("sequelize");
const db = require("../db");

const Message = db.define("message", {
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  senderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  attachments: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
});

module.exports = Message;
