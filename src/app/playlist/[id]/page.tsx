import PlaylistActionBar from "@/components/playlist/PlaylistActionBar";
import PlaylistCover from "@/components/playlist/PlaylistCover";
import {
  ClockIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface Props {
  id: string;
}

export default function Playlist({ params }: { params: Props }) {
  return (
    <main className="sm:ml-72">
      <div>
        <PlaylistCover />
        <PlaylistActionBar />
        <div className="m-0 max-w-[1955px] p-6">
          <div className="border-transparent rounded-md outline-none">
            <div
              className="top-16 h-9 sticky z-[2]"
              style={{ margin: "0 -24px 16px", padding: "0 24px" }}
            >
              <div
                className="grid gap-4 text-[#b3b3b3] h-9 border-b-[1px] border-[#282828]"
                style={{
                  gridTemplateColumns:
                    "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(120px,1fr)",
                  padding: "0 16px",
                }}
                role="row"
                aria-rowindex={1}
              >
                <div
                  className=""
                  aria-colindex={1}
                  aria-sort="none"
                  tabIndex={-1}
                >
                  #
                </div>
                <div
                  className="justify-self-start "
                  aria-colindex={2}
                  aria-sort="none"
                  tabIndex={-1}
                >
                  <div className="items-center flex justify-center bg-transparent border-none">
                    <span className="text-sm">Title</span>
                  </div>
                </div>
                <div
                  className="justify-self-start"
                  aria-colindex={3}
                  aria-sort="none"
                  tabIndex={-1}
                >
                  <div className="items-center flex justify-center bg-transparent border-none">
                    <span className="text-sm">Album</span>
                  </div>
                </div>
                <div
                  className="justify-self-start"
                  aria-colindex={4}
                  aria-sort="none"
                  tabIndex={-1}
                >
                  <div className="items-center flex justify-center bg-transparent border-none">
                    <span className="text-sm">Date added</span>
                  </div>
                </div>
                <div
                  className="HcMOFLaukKJdK5LfdHh0"
                  aria-colindex={5}
                  aria-sort="none"
                  tabIndex={-1}
                >
                  <div className="items-center flex justify-center bg-transparent border-none AgiCqnZUliKs_dafpdyi">
                    <ClockIcon
                      width={25}
                      height={25}
                      className="text-neutral-300"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative" style={{ transform: "translateY(0px)" }}>
              <div aria-rowindex={2}>
                <div
                  className="grid relative rounded-md gap-4 border-transparent select-none h-14"
                  style={{
                    gridTemplateColumns:
                      "[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(120px,1fr)",
                    padding: "0 16px",
                  }}
                >
                  <div className="flex items-center justify-self-end">
                    <div className="relative min-w-[16px] min-h-[16px] w-4 h-4 inline-block text-[#b3b3b3]">
                      <span className="absolute -top-1 right-1">1</span>
                      <button className="flex justify-center items-center h-full w-full absolute border-0 bg-transparent">
                        <PlayIcon
                          width={25}
                          height={25}
                          className="text-white"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-self-start">
                    <Image
                      src="https://i.scdn.co/image/ab67616d00004851c5716278abba6a103ad13aa7"
                      alt=""
                      className="w-12 h-12 mr-4 flex-shrink-0 object-cover object-center select-none bg-[#282828] rounded-md"
                      width={180}
                      height={180}
                    />
                    <div className="pr-2 grid gap-y-1 items-center">
                      <a
                        className="text-white "
                        href="/track/3dPtXHP0oXQ4HCWHsOA9js"
                      >
                        <div className="text-neutral-100">夜に駆ける</div>
                      </a>
                      <span className="">
                        <a
                          href="/artist/64tJ2EAv1R6UaZqc4iOCyj"
                          className="text-neutral-400 text-sm"
                        >
                          YOASOBI
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="justify-self-start">
                    <span className="Type__TypeElement-sc-goli3j-0 eMzEmF">
                      <a className="e" href="/album/3GzwPyPZCyrqUTaurTaS23">
                        夜に駆ける
                      </a>
                    </span>
                  </div>
                  <div className="justify-self-start">
                    <span className="Type__TypeElement-sc-goli3j-0 fjvaLo">
                      Jan 21, 2021
                    </span>
                  </div>
                  <div className="HcMOFLaukKJdK5LfdHh0" aria-colindex={5}>
                    <button className="RbsCNNM9a0WkFCM2UzBA tGKwoPuvNBNK3TzCS5OH">
                      <HeartIcon
                        width={25}
                        height={25}
                        className="text-neutral-300"
                      />
                    </button>
                    <div className="Type__TypeElement-sc-goli3j-0 fjvaLo Btg2qHSuepFGBG6X0yEN">
                      4:21
                    </div>
                    <button className="T0anrkk_QA4IAQL29get mYN_ST1TsDdC6q1k1_xs">
                      <EllipsisHorizontalIcon
                        width={25}
                        height={25}
                        className="text-neutral-300"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
