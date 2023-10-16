"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserProfileSchema = new mongoose_1.Schema({
    serialNo: {
        type: Number,
        required: true,
        trim: true,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    profileName: {
        type: String,
        required: true,
        trim: true,
        default: "User101"
    },
    profilePicUri: {
        type: String,
    },
    aboutMe: {
        type: String,
        trim: true
    },
    typeOfProfile: {
        type: String,
        required: true,
        enum: [
            "PMPADMIN",
            "TEACHER",
            "STUDENT"
        ],
        default: "STUDENT"
    }
});
exports.default = UserProfileSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclByb2ZpbGVTY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGF0YWJhc2Uvc2NoZW1hcy9Vc2VyUHJvZmlsZVNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFrQztBQUdsQyxNQUFNLGlCQUFpQixHQUFHLElBQUksaUJBQU0sQ0FBYztJQUNoRCxRQUFRLEVBQUM7UUFDUCxJQUFJLEVBQUMsTUFBTTtRQUNYLFFBQVEsRUFBQyxJQUFJO1FBQ2IsSUFBSSxFQUFDLElBQUk7S0FDVjtJQUNELE1BQU0sRUFBQztRQUNMLElBQUksRUFBQyxpQkFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO1FBQzFCLFFBQVEsRUFBQyxJQUFJO0tBQ2Q7SUFDRCxXQUFXLEVBQUM7UUFDVixJQUFJLEVBQUMsTUFBTTtRQUNYLFFBQVEsRUFBQyxJQUFJO1FBQ2IsSUFBSSxFQUFDLElBQUk7UUFDVCxPQUFPLEVBQUMsU0FBUztLQUNsQjtJQUNELGFBQWEsRUFBQztRQUNaLElBQUksRUFBQyxNQUFNO0tBQ1o7SUFDRCxPQUFPLEVBQUM7UUFDTixJQUFJLEVBQUMsTUFBTTtRQUNYLElBQUksRUFBQyxJQUFJO0tBQ1Y7SUFDRCxhQUFhLEVBQUM7UUFDWixJQUFJLEVBQUMsTUFBTTtRQUNYLFFBQVEsRUFBQyxJQUFJO1FBQ2IsSUFBSSxFQUFDO1lBQ0gsVUFBVTtZQUNWLFNBQVM7WUFDVCxTQUFTO1NBQ1Y7UUFDRCxPQUFPLEVBQUMsU0FBUztLQUNsQjtDQUNGLENBQUMsQ0FBQTtBQUVGLGtCQUFlLGlCQUFpQixDQUFBIn0=