"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const fs_1 = require("fs");
const path_1 = require("path");
let UploadController = class UploadController {
    getImage(params) {
        console.log(params.imageName);
        const imageLocation = (0, path_1.join)(process.cwd(), 'uploads/images', '15c924f42ffaa67b3f14a5be05f0a312');
        const file = (0, fs_1.createReadStream)(imageLocation);
        return new common_1.StreamableFile(file);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Lấy hình ảnh',
        description: ``,
    }),
    (0, common_1.Get)(':imageName'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", common_1.StreamableFile)
], UploadController.prototype, "getImage", null);
UploadController = __decorate([
    (0, swagger_1.ApiTags)('Upload'),
    (0, common_1.Controller)('home-page')
], UploadController);
exports.UploadController = UploadController;
//# sourceMappingURL=uploads.controller.js.map