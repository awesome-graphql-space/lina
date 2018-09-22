import { Module } from '@nestjs/common';
import { DateTimeScaler } from './scalers/date-time-scaler';

@Module({
	providers: [DateTimeScaler],
})
export class CommonsModule {}
