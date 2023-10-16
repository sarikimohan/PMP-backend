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
const BlogsModel_1 = __importDefault(require("../../../database/models/BlogsModel"));
class BlogsDao {
    addBlog(blog, userId, req) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("blog:", blog);
            const images = req.files;
            yield BlogsModel_1.default.create({
                userId: userId,
                title: blog.title,
                description: blog.description,
                imageOneURI: {
                    data: images[0].buffer,
                    contentType: images[0].mimetype
                },
                imageTwoURI: {
                    data: images[1].buffer,
                    contentType: images[1].mimetype
                },
                publishTime: new Date()
            });
            return;
        });
    }
}
exports.default = new BlogsDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZ3MuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9ibG9ncy9kYW9zL2Jsb2dzLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLHFGQUE2RDtBQUk3RCxNQUFNLFFBQVE7SUFDTixPQUFPLENBQUMsSUFBa0IsRUFBQyxNQUFhLEVBQUMsR0FBbUI7O1lBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxDQUFBO1lBRXpCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUE4QixDQUFBO1lBR2pELE1BQU0sb0JBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3BCLE1BQU0sRUFBQyxNQUFNO2dCQUNiLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSztnQkFDaEIsV0FBVyxFQUFDLElBQUksQ0FBQyxXQUFXO2dCQUM1QixXQUFXLEVBQUM7b0JBQ1YsSUFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO29CQUNyQixXQUFXLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7aUJBQy9CO2dCQUNELFdBQVcsRUFBQztvQkFDVixJQUFJLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07b0JBQ3JCLFdBQVcsRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTtpQkFDL0I7Z0JBQ0QsV0FBVyxFQUFDLElBQUksSUFBSSxFQUFFO2FBQ3pCLENBQUMsQ0FBQTtZQUVGLE9BQU07UUFDUixDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksUUFBUSxDQUFBIn0=