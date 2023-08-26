const { PostToTag } = require("../models");

const userSeed = async () => {
    const postToTagData = [
        { postId: 1, tagId: 1 },
        { postId: 1, tagId: 2 },
        { postId: 1, tagId: 3 },
        { postId: 2, tagId: 2 },
        { postId: 2, tagId: 2 },
        { postId: 2, tagId: 3 },
        { postId: 3, tagId: 3 },
        { postId: 3, tagId: 6 },
        { postId: 3, tagId: 8 },
        { postId: 4, tagId: 4 },
        { postId: 5, tagId: 5 },
        { postId: 6, tagId: 6 },
        { postId: 7, tagId: 7 },
        { postId: 8, tagId: 8 },
        { postId: 9, tagId: 9 },
        { postId: 10, tagId: 10 },
        { postId: 11, tagId: 11 },
        { postId: 12, tagId: 12 },
        { postId: 13, tagId: 13 },
        { postId: 14, tagId: 14 },
        { postId: 15, tagId: 15 },
        { postId: 16, tagId: 16 },
        { postId: 17, tagId: 17 },
        { postId: 18, tagId: 18 },
        { postId: 19, tagId: 19 },
        { postId: 20, tagId: 20 },
        { postId: 21, tagId: 21 },
        { postId: 22, tagId: 22 },
        { postId: 23, tagId: 23 },
        { postId: 24, tagId: 24 },
        { postId: 25, tagId: 25 },
        { postId: 26, tagId: 26 },
        { postId: 27, tagId: 27 },
        { postId: 28, tagId: 28 },
        { postId: 29, tagId: 29 },
        { postId: 30, tagId: 30 },
        { postId: 31, tagId: 31 },
        { postId: 32, tagId: 32 },
        { postId: 33, tagId: 33 },
        { postId: 34, tagId: 34 },
        { postId: 35, tagId: 35 },
        { postId: 36, tagId: 36 },
        { postId: 37, tagId: 37 },
        { postId: 38, tagId: 38 },
        { postId: 39, tagId: 39 },
        { postId: 40, tagId: 40 },
        { postId: 41, tagId: 41 },
        { postId: 42, tagId: 42 },
        { postId: 43, tagId: 43 },
        { postId: 44, tagId: 44 },
        { postId: 45, tagId: 45 },
        { postId: 46, tagId: 46 },
        { postId: 47, tagId: 47 },
        { postId: 48, tagId: 48 },
        { postId: 49, tagId: 49 },
        { postId: 50, tagId: 50 },
        // { postId: 51, tagId: 51 },
        // { postId: 52, tagId: 52 },
        // { postId: 53, tagId: 53 },
        // { postId: 54, tagId: 54 },
        // { postId: 55, tagId: 55 },
        // { postId: 56, tagId: 56 },
        // { postId: 57, tagId: 57 },
        // { postId: 58, tagId: 58 },
        // { postId: 59, tagId: 59 },
        // { postId: 60, tagId: 60 },
        // { postId: 61, tagId: 61 },
        // { postId: 62, tagId: 62 },
        // { postId: 63, tagId: 63 },
        // { postId: 64, tagId: 64 },
        // { postId: 65, tagId: 65 },
        // { postId: 66, tagId: 66 },
        // { postId: 67, tagId: 67 },
        // { postId: 68, tagId: 68 },
        // { postId: 69, tagId: 69 },
        // { postId: 70, tagId: 70 },
        // { postId: 71, tagId: 71 },
        // { postId: 72, tagId: 72 },
        // { postId: 73, tagId: 73 },
        // { postId: 74, tagId: 74 },
        // { postId: 75, tagId: 75 },
        // { postId: 76, tagId: 76 },
        // { postId: 77, tagId: 77 },
        // { postId: 78, tagId: 78 },
        // { postId: 79, tagId: 79 },
        // { postId: 80, tagId: 80 },
    ];

    let res = await PostToTag.bulkCreate(postToTagData);
    // console.log(res);
    // process.exit(0);
};
// userSeed();

module.exports = userSeed;