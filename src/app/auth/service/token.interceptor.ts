import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  
  // Liste des endpoints à exclure
  const excludedUrls = ["/login"]; 

  // Vérifier si l'URL doit être exclue
  const shouldExclude = excludedUrls.some(url => req.url.includes(url));

  if (!shouldExclude) {
      const jwt = authService.getToken();
      if (jwt) {  // Si le token est présent
          const reqWithToken = req.clone({
              setHeaders: { Authorization: "Bearer " + jwt }
          });
          return next(reqWithToken);
      } else {
          // Token non trouvé, rediriger vers la page de login
          authService.logout(); // Déconnexion et redirection
          return next(req);  // Ou rediriger vers login selon ton besoin
      }
  }

  return next(req);
};
