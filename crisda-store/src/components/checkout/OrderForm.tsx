export default function OrderForm() {
  return (
    <section className="rounded-3xl bg-(--color-surface) p-6 md:p-8">

      <div className="flex items-center gap-3 justify-between">
        <div className="flex gap-2 items-center">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs text-white">
          01
        </span>

        <h2 className="text-lg font-medium">
          Delivery details
        </h2>
        </div>
        <button className="bg-black text-white p-2 rounded-md">
            Use Recent
        </button>
      </div>

      <div className="mt-6 grid gap-4">

        <div>
          <label className="text-sm">
            Full name
          </label>

          <input
            type="text"
            placeholder="Your name"
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black"
          />
        </div>

        <div>
          <label className="text-sm">
            Phone number
          </label>

          <input
            type="tel"
            placeholder="Your phone number"
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black"
          />
        </div>

        <div>
          <label className="text-sm">
            Address
          </label>

          <textarea
            rows={3}
            placeholder="House / street / locality"
            className="mt-2 w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          <div>
            <label className="text-sm">
              City
            </label>

            <input
              type="text"
              className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="text-sm">
              Pincode
            </label>

            <input
              type="text"
              inputMode="numeric"
              className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none"
            />
          </div>

        </div>

      </div>
    </section>
  );
}