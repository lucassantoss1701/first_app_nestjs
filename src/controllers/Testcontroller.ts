import { Controller, Get } from "@nestjs/common";
import { Testservice } from "src/services/Testservice";

@Controller("/test")
export class TestController {
  constructor(private readonly testService: Testservice) {}

  @Get()
  getHello(): string {
    return this.testService.getTest();
  }
}
