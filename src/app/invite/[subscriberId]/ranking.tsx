import { getRanking } from '@/generated/http/api'
import Image from 'next/image'
import cooper from '../../../assets/medal-cooper.svg'
import gold from '../../../assets/medal-gold.svg'
import silver from '../../../assets/medal-silver.svg'

interface RankingProps {
  subscriberId: string
}

export async function Ranking({ subscriberId }: RankingProps) {
  const { ranking } = await getRanking()

  return (
    <div className="w-full md:max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.length > 0 ? (
          ranking.map((item, index) => {
            const rankingPosition = index + 1

            return (
              <div
                key={item.id}
                className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
              >
                <span className="text-sm text-gray-300 leading-none">
                  <span className="font-semibold">{rankingPosition}°</span> |{' '}
                  {item.name}
                </span>

                <div className="flex items-center gap-3">
                  <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                    {item.score}
                  </span>

                  {subscriberId === item.id && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-md bg-gray-500 text-gray-300">
                      Você
                    </span>
                  )}
                </div>

                {rankingPosition === 1 && (
                  <Image src={gold} alt="" className="absolute top-0 right-8" />
                )}

                {rankingPosition === 2 && (
                  <Image
                    src={silver}
                    alt=""
                    className="absolute top-0 right-8"
                  />
                )}

                {rankingPosition === 3 && (
                  <Image
                    src={cooper}
                    alt=""
                    className="absolute top-0 right-8"
                  />
                )}
              </div>
            )
          })
        ) : (
          <p className="text-gray-300 text-sm md:text-base">
            Nenhuma classificação disponível ainda.
          </p>
        )}
      </div>
    </div>
  )
}
