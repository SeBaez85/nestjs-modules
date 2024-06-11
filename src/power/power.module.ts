import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

//! Por defecto los servicios son privados y pertenecen a un cierto módulo,
//! para poder exportarlos y usarlos en otros módulos del proyecto usamos el array exports
@Module({
  providers: [PowerService],
  exports: [PowerService],
})
export class PowerModule {}
