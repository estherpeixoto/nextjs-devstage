import Image from 'next/image'
import logo from '../../../assets/logo.svg'
import { InviteLinkInput } from './invite-link-input'
import { Ranking } from './ranking'
import { Stats } from './stats'

interface InviteProps {
  params: Promise<{
    subscriberId: string
  }>
}

export default async function Invite(props: InviteProps) {
  const { subscriberId } = await props.params

  const inviteLink = `${process.env.API_URL}/invites/${subscriberId}`

  return (
    <div className="max-w-[1126px] flex flex-col items-center md:items-start md:pt-[5.5rem] gap-10 md:gap-16">
      <Image src={logo} alt="devstage" width={108.5} height={30} />

      <div className="flex flex-col md:flex-row gap-10 md:gap-32">
        <div className="flex flex-col gap-10 w-full">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-[2.5rem] font-semibold font-heading text-gray-100 leading-none">
              Inscrição confirmada!
            </h1>

            <p className="text-gray-300">
              Para entrar no evento, acesse o link enviado para seu e-mail.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
                Indique e Ganhe
              </h2>

              <p className="text-gray-300">
                Convide mais pessoas para o evento e concorra a prêmios
                exclusivos! É só compartilhar o link abaixo e acompanhar as
                inscrições:
              </p>
            </div>

            <InviteLinkInput inviteLink={inviteLink} />
            <Stats subscriberId={subscriberId} />
          </div>
        </div>

        <Ranking subscriberId={subscriberId} />
      </div>
    </div>
  )
}
