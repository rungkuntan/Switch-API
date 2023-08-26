module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define(
        "Message",
        {
            textcontent: {
                type: DataTypes.STRING,
            },
            imageUrl: {
                type: DataTypes.STRING,
            },
        },
        { underscored: true }
    );

    Message.associate = (models) => {
        Message.belongsTo(models.ChatRoom, {
            foreignKey: {
                name: "chatRoomId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
        });

        Message.belongsTo(models.User, {
            foreignKey: {
                name: "senderId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
        });
    };
    return Message;
};
