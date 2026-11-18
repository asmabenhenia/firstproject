import { TestBed } from '@angular/core/testing';
import { RouterTestingHarness } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AppModule } from './app.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
import { AuthService } from './services/auth.service';

describe('Atelier 3 navigation without authentication', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppModule] }).compileComponents();
  });
  it('opens Home without signing in', async () => {
    const harness = await RouterTestingHarness.create();
    expect(TestBed.inject(AuthService).isAuthenticated()).toBeFalse();
    await harness.navigateByUrl('/', HomeComponent);
    expect(TestBed.inject(Router).url).toBe('/');
  });
  it('opens Products without signing in', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/products', ProductsComponent);
    expect(component.products.map(product => product.id)).toEqual([1, 2, 3, 4]);
    expect(TestBed.inject(Router).url).toBe('/products');
  });
  it('keeps Signin and Signout buttons unconfigured', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/signin', SigninComponent);
    const auth = TestBed.inject(AuthService);
    const signin = spyOn(auth, 'signin');
    const signout = spyOn(auth, 'signout');
    const buttons = harness.routeNativeElement?.querySelectorAll('button');
    expect(buttons?.length).toBe(2);
    buttons?.forEach(button => {
      expect(button.disabled).toBeFalse();
      button.click();
    });
    expect(signin).not.toHaveBeenCalled();
    expect(signout).not.toHaveBeenCalled();
    expect(auth.isAuthenticated()).toBeFalse();
    expect(TestBed.inject(Router).url).toBe('/signin');
  });
});
