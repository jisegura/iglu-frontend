import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ServerInterceptor } from './server-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ServerInterceptor, multi: true },
];
