"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
function configSwagger(app) {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API VREX')
        .setDescription('## The VREX API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
}
exports.configSwagger = configSwagger;
//# sourceMappingURL=api-docs.config.js.map