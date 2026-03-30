import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    
    const roles = this.reflector.get(Roles, context.getHandler());
    console.log('roles', roles);
    if (!roles) {
      return true;
    } 
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log('after if', request);
    return matchRoles(roles, user.roles);
  }
}

const matchRoles = (roles, userRoles) => {
//   console.log('roles', roles);
//   console.log('userRoles', userRoles);
  return false;
};
