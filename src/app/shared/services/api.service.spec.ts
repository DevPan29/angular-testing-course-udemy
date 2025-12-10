import {TestBed} from "@angular/core/testing";
import {ApiService} from "./api.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TagInterface} from "../types/tag.interface";

describe('ApiService', () => {
  let apiService: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    })
    apiService = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('create service', () => {
    expect(apiService).toBeTruthy();
  })

  describe('getTags', () => {
    it('should return a list of tags', () => {
      let  tags: TagInterface[] | undefined;
      apiService.getTags().subscribe(response => {
        // here the expect does not work for its async nature
        tags = response;
      })
      expect(tags).toEqual([])
    })
  })

})
