export default function Avatar() {
  const randoms = [
    [1, 2],
    [3, 4, 5],
    [6, 7]
  ]
  return (
    <div className="pointer-events-none mt-10 md:mt-0 lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
      <div className="absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
        <div className="flex items-center space-x-6 lg:space-x-8">
          {randoms.map((random, number) => (
            <div
              key={`random-${random[number]}`}
              className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
            >
              {random.map((number) => (
                <div
                  key={`random-${number}`}
                  className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                >
                  <img
                    src={`https://picsum.photos/600?random=${number}`}
                    alt=""
                    className="size-full bg-indigo-100 object-cover object-center"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
