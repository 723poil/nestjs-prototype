import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger(HttpExceptionFilter.name);
    
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        const error = exception.getResponse() as
            | string
            | { 
                error: string; 
                statusCode: number; 
                message: string | string [];
            }
            
        this.logger.error(`request url: ${request.url}, request ip: ${request.ip}, ${exception.stack}`);

        if (typeof error === 'string') {
            response.status(status)
                .json({
                    success: false,
                    timestamp: new Date().toISOString(),
                    statusCode: status,
                    error,
                });
        } else {
            response.status(status)
                .json({
                    success: false,
                    timestamp: new Date().toISOString(),
                    ...error,
                });
        }
    }
}