import { AnimatedButtonWithIcon } from "../buttons/AnimatedButtonWithIcon"
import { ButtonGroup } from "@mui/material"
import { GitHub, Twitter } from "@mui/icons-material"
import { DiscordIcon } from "../icons/DiscordIcon"

export function SocialMediaLinksSection(): JSX.Element {
  return (
    <>
      <ButtonGroup sx={{ float: "right" }}>
        <AnimatedButtonWithIcon
          openInNewTab
          image={<GitHub />}
          href={"https://github.com/Mister-Eth/ETHTPS"}
          text={"Github repository"}
        />
        <AnimatedButtonWithIcon
          openInNewTab
          image={<Twitter />}
          href={"https://twitter.com/ethtps"}
          text={"Twitter"}
        />
        <AnimatedButtonWithIcon
          openInNewTab
          image={<DiscordIcon />}
          href={"https://discord.gg/jWPcsTzpCT"}
          text={"Join our Discord"}
        />
      </ButtonGroup>
    </>
  )
}