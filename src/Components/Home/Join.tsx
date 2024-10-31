function Join() {
  return (
    <section className="w-full bg-slate-300 text-black py-20">
      <div className="w-full text-center max-w-[1200px] mx-auto flex flex-col gap-6 md:px-5 px-3">
        <h4 className=" text-3xl font-semibold leading-11 text-black ">
          Join our expanding marketplace and transform connections into
          growth—bringing together UK investors, entrepreneurs, and service
          providers
        </h4>
        <p className=" text-xl font-normal mx-auto max-w-[700px]">
          Invest Connect Marketplace connects UK investors, entrepreneurs, and
          service providers to build profitable partnerships, accelerate
          business growth, and shape a successful future
        </p>
        <div className="flex md:flex-row flex-col gap-4 mx-auto mt-10">
          <a
            href="/investor/register"
            className="bg-white hover:bg-primary text-primary hover:text-white px-3 py-2 rounded-md  font-semibold "
          >
            Join our Marketplace
          </a>
        </div>
      </div>
    </section>
  );
}

export default Join;
