import React from 'react'

export default function Main({ match }) {
    return (
      <h1>id do usuário logado é: {match.params.id}</h1>
    )
}
