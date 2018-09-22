import { Test, TestingModule } from '@nestjs/testing';
import { ArangodbController } from './arangodb.controller';

describe('Arangodb Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ArangodbController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ArangodbController = module.get<ArangodbController>(ArangodbController);
    expect(controller).toBeDefined();
  });
});
