import Image from "next/image";

interface Props {
  id: string;
}

export default function Playlist({ params }: { params: Props }) {
  return (
    <main className="sm:ml-80">
      <div className="">
        <div className="flex pb-6 h-[30vh] max-h-[400px] min-h-[340px] max-w-none text-white relative overflow-hidden">
          <div
            className="block w-full h-full absolute left-0 top-0 "
            style={{ backgroundColor: "rgb(8, 80, 104)" }}
          />
          <div
            className="block h-full absolute top-0 left-0 w-full"
            style={{
              background:
                "linear-gradient(transparent 0,rgba(0,0,0,.5) 100%),url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDov…sdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=)",
            }}
          >
            <div className="h-[232px] w-[232px] min-w-[232px] self-end me-6">
              <div className="flex relative h-[inherit]">
                <div className="w-full h-full">
                  <Image
                    style={{ boxShadow: "0 4px 60px rgba(0,0,0,.5);" }}
                    src="https://i.scdn.co/image/ab67706c0000da84b66eba3e3862b4986d1b9554"
                    alt="Jpop and Anime"
                    className="w-56 h-56 object-cover object-center"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 z-0 justify-end">
            <span
              className="text-sm font-bold"
              style={{
                marginBlock: 0,
              }}
            >
              Playlist
            </span>
            <span className="mt-2 overflow-hidden text-left w-full">
              <h1
                className="text-8xl font-bold"
                style={{
                  margin: "0.08em 0px 0.12em",
                  visibility: "visible",
                }}
              >
                Jpop and Anime
              </h1>
            </span>
            <span className="font-normal text-sm text-neutral-300">
              Thanks for 7k likes DM me on ig @karxn8204 for reccomendations.
            </span>
            <div className="items-center flex flex-wrap mt-4">
              <div className="grid grid-flow-col gap-2 items-center whitespace-nowrap text-neutral-300">
                <figure
                  className="w-6 h-6 relative inline-block"
                  title="karan82004"
                >
                  <div
                    className="h-full w-full select-none"
                    style={{
                      width: "24px",
                      height: "24px",
                      insetInlineStart: "0px",
                    }}
                  >
                    <Image
                      className="rounded-full object-cover object-center"
                      width={180}
                      height={180}
                      src="https://i.scdn.co/image/ab67757000003b82f56daa9161350838ddaed926"
                      alt="karan82004"
                    />
                  </div>
                </figure>
                <span
                  style={{
                    marginBlock: 0,
                  }}
                  className="text-sm font-bold"
                >
                  <a href="/user/karan82004">karan82004</a>
                </span>
              </div>
              <span style={{ marginBlock: 0 }} className="text-sm font-normal">
                7,942 likes
              </span>
              <span style={{ marginBlock: 0 }} className="text-sm font-normal">
                621 songs,{" "}
                <span className="text-neutral-300 whitespace-nowrap">
                  over 24 hr
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
