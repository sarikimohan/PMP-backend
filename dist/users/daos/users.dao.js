"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const UsersModel_1 = __importDefault(require("../../src/database/models/UsersModel"));
const UserProfileModel_1 = __importDefault(require("../../src/database/models/UserProfileModel"));
const log = (0, debug_1.default)("app:in-memory-dao");
class UsersDao {
    constructor() {
        log("Created new instance of UsersDao");
    }
    addUser(User) {
        return __awaiter(this, void 0, void 0, function* () {
            const {} = User;
            var newUser;
            try {
                newUser = yield UsersModel_1.default.create({
                    email: User.email,
                    password: User.password,
                    authId: 1,
                    loginVia: "EMAIL",
                    identifier: "hello",
                    timeOfSignUp: new Date()
                });
            }
            catch (err) {
                console.log(err);
            }
            yield UserProfileModel_1.default.create({
                serialNo: 1,
                userId: newUser._id + "",
                profileName: "User101",
                profilePicUri: "",
                about: "",
                typeOfProfile: User.typeOfProfile
            });
            return newUser._id;
        });
    }
    getUserByEmailWithPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UsersModel_1.default.findOne({ email: email }).select({ email: 1, password: 1 });
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return UsersModel_1.default.findOne({ email: email }).exec();
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return UsersModel_1.default.findOne({ _id: userId }).populate("User").exec();
        });
    }
    getUsers(limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return UsersModel_1.default.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
    updateUserById(userId, userFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield UsersModel_1.default.findOneAndUpdate({ _id: userId }, { $set: userFields }, { new: true }).exec();
            return existingUser;
        });
    }
    removeUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return UsersModel_1.default.deleteOne({ _id: userId }).exec();
        });
    }
}
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvZGFvcy91c2Vycy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFLQSxrREFBMEI7QUFFMUIsc0ZBQThEO0FBQzlELGtHQUEwRTtBQUUxRSxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLFFBQVE7SUFFWjtRQUNFLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFSyxPQUFPLENBQUMsSUFBbUI7O1lBQy9CLE1BQU0sRUFBRSxHQUFJLElBQUksQ0FBQTtZQUNoQixJQUFJLE9BQVcsQ0FBQTtZQUNmLElBQUc7Z0JBQ0MsT0FBTyxHQUFHLE1BQU0sb0JBQVUsQ0FBQyxNQUFNLENBQUM7b0JBQ2xDLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSztvQkFDaEIsUUFBUSxFQUFDLElBQUksQ0FBQyxRQUFRO29CQUN0QixNQUFNLEVBQUMsQ0FBQztvQkFDUixRQUFRLEVBQUMsT0FBTztvQkFDaEIsVUFBVSxFQUFDLE9BQU87b0JBQ2xCLFlBQVksRUFBQyxJQUFJLElBQUksRUFBRTtpQkFDeEIsQ0FBQyxDQUFBO2FBQ0g7WUFBQSxPQUFNLEdBQUcsRUFBQztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ2pCO1lBR0QsTUFBTSwwQkFBZ0IsQ0FBQyxNQUFNLENBQUM7Z0JBQzVCLFFBQVEsRUFBQyxDQUFDO2dCQUNWLE1BQU0sRUFBQyxPQUFPLENBQUMsR0FBRyxHQUFDLEVBQUU7Z0JBQ3JCLFdBQVcsRUFBQyxTQUFTO2dCQUNyQixhQUFhLEVBQUMsRUFBRTtnQkFDaEIsS0FBSyxFQUFDLEVBQUU7Z0JBQ1IsYUFBYSxFQUFDLElBQUksQ0FBQyxhQUFhO2FBQ2pDLENBQUMsQ0FBQTtZQUNGLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQTtRQUNwQixDQUFDO0tBQUE7SUFFSywwQkFBMEIsQ0FBQyxLQUFhOztZQUM1QyxPQUFPLE1BQU0sb0JBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFBO1FBRWxGLENBQUM7S0FBQTtJQUdPLGNBQWMsQ0FBQyxLQUFhOztZQUNoQyxPQUFPLG9CQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckQsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLE1BQWM7O1lBQzlCLE9BQU8sb0JBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckUsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLENBQUM7O1lBQ2pDLE9BQU8sb0JBQVUsQ0FBQyxJQUFJLEVBQUU7aUJBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ2xCLElBQUksRUFBRSxDQUFDO1FBQ1osQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLE1BQWMsRUFBRSxVQUFxQzs7WUFDeEUsTUFBTSxZQUFZLEdBQUcsTUFBTSxvQkFBVSxDQUFDLGdCQUFnQixDQUNwRCxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFDZixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFDcEIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQ2QsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVULE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxNQUFjOztZQUNqQyxPQUFPLG9CQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEQsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIn0=