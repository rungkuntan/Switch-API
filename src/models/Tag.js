module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define(
        "Tag",
        {
            tagName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    notEmpty: true,
                },
            },
            tagCount: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1,
                validate: {
                    notEmpty: true,
                },
            },
        },
        {
            underscored: true,
        }
    );

    Tag.associate = (models) => {
        Tag.hasMany(models.PostToTag, {
            foreignKey: {
                name: "tagId",
                allowNull: false,
            },
            onDelete: "RESTRICT",
        });
    };
    return Tag;
};
