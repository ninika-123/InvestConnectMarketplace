function Join() {
  return (
    <section className="w-full bg-gradient-to-br from-primary to-red-700 text-white py-20">
      <div className="w-full text-center max-w-[1350px] mx-auto flex flex-col gap-6 md:px-5 px-3">
        <h4 className=" text-4xl font-semibold leading-11 text-justify">
          Join our expanding marketplace and transform connections into
          growth—bringing together UK investors, entrepreneurs, and service
          providers
        </h4>
        <p className=" text-2xl font-normal text-justify">
          Invest Connect Marketplace connects UK investors, entrepreneurs, and
          service providers to build profitable partnerships, accelerate
          business growth, and shape a successful future
        </p>
        <div className="flex md:flex-row flex-col gap-4 mx-auto mt-20">
          <a
            href="/investor/register"
            className="bg-white hover:bg-primary text-primary hover:text-white px-3 py-2 rounded-md  font-semibold text-2xl"
          >
            Sign up as an investor{" "}
          </a>
          <a
            href="/entrepreneur/register"
            className="bg-white hover:bg-primary text-primary hover:text-white px-3 py-2 rounded-md font-semibold text-2xl"
          >
            Sign up as an entrepreneur{" "}
          </a>
          <a
            href="/investor/register"
            className="bg-white hover:bg-primary text-primary hover:text-white px-3 py-2 rounded-md  font-semibold text-2xl"
          >
            Sign up as an propessional service providers
          </a>
        </div>
      </div>
    </section>
  );
}

export default Join;
