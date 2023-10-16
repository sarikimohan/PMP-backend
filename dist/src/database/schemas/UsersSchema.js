"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UsersSchema = new mongoose_1.Schema({
    authId: {
        type: Number,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    loginVia: {
        type: String,
        required: true,
        enum: [
            "EMAIL",
            "MOBILE_NUMBER"
        ],
        default: "EMAIL",
        trim: true,
    },
    identifier: {
        type: String,
        required: true,
        trim: true,
    },
    timeOfSignUp: {
        type: Date,
        required: true,
        trim: true,
    }
});
exports.default = UsersSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnNTY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGF0YWJhc2Uvc2NoZW1hcy9Vc2Vyc1NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFrQztBQUdsQyxNQUFNLFdBQVcsR0FBRyxJQUFJLGlCQUFNLENBQVE7SUFDcEMsTUFBTSxFQUFDO1FBQ0wsSUFBSSxFQUFDLE1BQU07UUFDWCxRQUFRLEVBQUMsSUFBSTtRQUNiLElBQUksRUFBQyxJQUFJO0tBQ1Y7SUFDRCxLQUFLLEVBQUM7UUFDSixJQUFJLEVBQUMsTUFBTTtRQUNYLFFBQVEsRUFBQyxJQUFJO1FBQ2IsTUFBTSxFQUFDLElBQUk7UUFDWCxJQUFJLEVBQUMsSUFBSTtLQUNWO0lBQ0QsUUFBUSxFQUFDO1FBQ1AsSUFBSSxFQUFDLE1BQU07UUFDWCxJQUFJLEVBQUMsSUFBSTtRQUNULFFBQVEsRUFBQyxJQUFJO0tBQ2Q7SUFDRCxRQUFRLEVBQUM7UUFDUCxJQUFJLEVBQUMsTUFBTTtRQUNYLFFBQVEsRUFBQyxJQUFJO1FBQ2IsSUFBSSxFQUFDO1lBQ0gsT0FBTztZQUNQLGVBQWU7U0FDaEI7UUFDRCxPQUFPLEVBQUMsT0FBTztRQUNmLElBQUksRUFBQyxJQUFJO0tBQ1Y7SUFDRCxVQUFVLEVBQUM7UUFDVCxJQUFJLEVBQUMsTUFBTTtRQUNYLFFBQVEsRUFBQyxJQUFJO1FBQ2IsSUFBSSxFQUFDLElBQUk7S0FDVjtJQUNELFlBQVksRUFBQztRQUNYLElBQUksRUFBQyxJQUFJO1FBQ1QsUUFBUSxFQUFDLElBQUk7UUFDYixJQUFJLEVBQUMsSUFBSTtLQUNWO0NBQ0YsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsV0FBVyxDQUFBIn0=