const Quote1 = (props) => {
  return (
    <div className="comp_quote_1">
      <div className="fd-foreword has-left">
        <div className="fd-foreword-left">
          <div className="comp_quote_1-left">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAYAAABfJS4tAAAABGdBTUEAALGPC/xhBQAAAmBJREFUOBHFk7uLU2EQxW9uTAQJdhYJIhjYRbGSPAkqURSFQAS1sLIQ/wFhwU4j2ChbLD4QBBsLUbIsKBFWhK2WvMN2WvhgRUxhIWoCsnldf3PNhC8mETs/uDszZ8537tnJXMv6nyedTm/71/cr1zvrQi6Xs9vtdjYYDN7vdrt2s9ncmMUVPBaLHQmFQoudTicJ9+VUJ9Fo9GChUFh2HCcsl4iPJU47iURid7/fXxkMBjHpezyeuxInhBFNgz9DbKcQ5EDu/M7G/8bj8fler/cKdI/Rcbm2AViInkBw1RB9Y9t2tl6vPzJ5kuN0DqfrpCr6Ge7FQCBwRfojxzL0Vqt1D2y7NHC54fP5jpdKpa9S/3kQXQTbJTjcD36//1ixWPyovJFjRC8Bzg0b3yCemiXKCA7zX2WH3C0MnDRFBXeFIXnIrw6JEq5B/GLUYyluryuA29sYeKe1Rlc4lUqFAIIKEl8Y+bTU3QBpMNfVaQRxakUikaOENSXgQn4sP3Etk8k8ZKcH2pP1YhM+aQ1nmVx0qozkDu5/Ss91THNeCj2M5gLPeXbzAfu8orhEsH1mDe8cz1mem3xINUzukL7O2I3mBc25cJqv6ozWCP+NewCTl4WrjieGr0ISET9k1O+NfCKFmxRQHVd509R9FRLktkQ54XB4k/BW8hnnh+CucKPR+E5+YwZxwEsL2svn831qczW15Ua25Lkko3nVarUlLtwaY1lWB2yBT7pq4tRPqBd4HAN34C6h81Qwd92MppVMJvezTilIW16vd71cLm+afTPnC9zLjynz98EtVyqV19r/BaKo9c/mod9zAAAAAElFTkSuQmCC" alt="" className="comp_quote_1-left-quote" />
            <div className="comp_quote_1-left-line"></div>
          </div>
        </div>
        <div className="fd-foreword-body">
          <div className="comp_quote_1-text">
            {props.text}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote1