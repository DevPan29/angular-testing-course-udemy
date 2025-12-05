import { UserInteface } from "../types/user.interface";
import { UsersService } from "./users.service";
import { TestBed } from "@angular/core/testing";
import {UtilsService} from "./utils.service";

describe('UsersService', () => {
    let usersService: UsersService;
    const utilsServiceMock = {
      pluck: jest.fn() // this is a function that don't do anything
    }
    beforeEach(() => {
        TestBed.configureTestingModule({
            // providers: [UsersService, UtilsService],
          providers: [UsersService,
            {
              provide: UtilsService,
              useValue: utilsServiceMock
            }],
        });
        usersService = TestBed.inject(UsersService);
    });

    it('creates a service', () => {
        // toBeTruthy checks that the value is not null or undefined, so the service is available
        expect(usersService).toBeTruthy();
    });

    describe('addUser', () => {
        it('should add a user', () => {
            const user: UserInteface =
            { id: '1', name: 'foo' };
            usersService.addUser(user);
            expect(usersService.users).toEqual([ { id: '1', name: 'foo' }]);
            // expect(usersService.users.length).toBe(1);
            // expect(usersService.users[0]).toEqual(user);
        })
    });

     describe('removeUser', () => {
        it('should remove a user', () => {
           const user: UserInteface =
            { id: '3', name: 'foo' };
            usersService.users = [user];
            usersService.removeUser('3');
            expect(usersService.users).toEqual([]);
        })
    });

     describe('getUsernames', () => {
       it('should get usernames', () => {
          utilsServiceMock.pluck.mockReturnValue(['foo'])
          expect(usersService.getUserNames()).toEqual(['foo']);
       })
     })
})
