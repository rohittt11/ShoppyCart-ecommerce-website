import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-gradient-to-bl from-purple-600 to-pink-600 w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to ShoppyCart Shop Smarter, Live Better!
          </h1>
          <h2 className="text-xl font-medium tracking-widest">
            At ShoppyCart, we offer a wide variety of products to suit your
            every need. Whether you're looking for the latest fashion trends,
            electronics or everyday essentials, we have it all. Experience
            seamless shopping with exclusive deals, fast delivery and top-notch
            customer service.
          </h2>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
