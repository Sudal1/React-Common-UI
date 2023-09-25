import styled from '@emotion/styled'
import { css, Global } from '@emotion/react'

interface Props {
  children: React.ReactNode
}

const FullPage = ({ children }: Props) => {
  return (
    <>
      <Page>{children}</Page>
      <Global
        styles={css`
          html,
          body {
            height: 100%;
          }
        `}
      />
    </>
  )
}

const Page = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export default FullPage
