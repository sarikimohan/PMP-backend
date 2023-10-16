"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BlogsSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    imageOneURI: {
        type: {
            data: Buffer,
            contentType: String,
        },
        trim: true,
    },
    imageTwoURI: {
        type: {
            data: Buffer,
            contentType: String,
        },
        trim: true,
    },
    publishTime: {
        type: Date,
        required: true,
        trim: true,
    },
});
exports.default = BlogsSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvZ3NTY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGF0YWJhc2Uvc2NoZW1hcy9CbG9nc1NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUE0QztBQUc1QyxNQUFNLFdBQVcsR0FBRyxJQUFJLGlCQUFNLENBQVE7SUFDcEMsTUFBTSxFQUFFO1FBQ04sSUFBSSxFQUFFLGlCQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFDM0IsUUFBUSxFQUFFLElBQUk7UUFDZCxJQUFJLEVBQUUsSUFBSTtLQUNYO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtRQUNkLElBQUksRUFBRSxJQUFJO0tBQ1g7SUFDRCxXQUFXLEVBQUU7UUFDWCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO1FBQ2QsSUFBSSxFQUFFLElBQUk7S0FDWDtJQUNELFdBQVcsRUFBRTtRQUNYLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osV0FBVyxFQUFFLE1BQU07U0FDcEI7UUFDRCxJQUFJLEVBQUUsSUFBSTtLQUNYO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE1BQU07WUFDWixXQUFXLEVBQUUsTUFBTTtTQUNwQjtRQUNELElBQUksRUFBRSxJQUFJO0tBQ1g7SUFDRCxXQUFXLEVBQUU7UUFDWCxJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxJQUFJO1FBQ2QsSUFBSSxFQUFFLElBQUk7S0FDWDtDQUNGLENBQUMsQ0FBQztBQUVILGtCQUFlLFdBQVcsQ0FBQyJ9