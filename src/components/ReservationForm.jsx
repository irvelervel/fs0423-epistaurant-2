// questo componente servirà a permettere agli utenti di prenotare un tavolo nel nostro ristorante
// questo componente avrà bisogno dello STATE
// perchè OGNI VOLTA che voi inserite 1+ input fields in un componente, avrete bisogno dello STATE

import { Component } from 'react'
import { Col, Container, Row, Form, Button, Alert } from 'react-bootstrap'

// quali sono i campi del nostro form? Com'è fatta una prenotazione di un tavolo?

// name --> string
// phone --> string/number
// numberOfPeople --> string/number
// smoking --> boolean
// dateTime --> string
// specialRequests --> string (not mandatory)

class ReservationForm extends Component {
  state = {
    reservation: {
      name: '',
      phone: '',
      numberOfPeople: '1',
      smoking: false,
      dateTime: '',
      specialRequests: '',
    },
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <Col md={6}>
            <h2 className="text-center">Prenota il tuo tavolo!</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Il tuo nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Gianni Morandi"
                  value={this.state.reservation.name}
                  onChange={
                    // setto lo state ogni volta che scrivo una lettera nel campo "Nome"
                    (e) => {
                      this.setState({
                        // qui dentro va inserito il NUOVO OGGETTO STATE
                        // che verrà "fuso" con l'oggetto esistente
                        reservation: {
                          // grazie allo spread operator ...
                          // il mio oggetto "reservation" parte
                          // trascinandosi dentro tutte le coppie esistenti nello state
                          ...this.state.reservation,
                          name: e.target.value,
                        },
                        // VIETATO FARE
                        // this.state.reservation.name = e.target.value <-- VIETATISSIMO!
                        // perchè lo state è read-only
                      })
                    }
                  }
                />
              </Form.Group>

              {/* EASTER EGG */}
              {/* voglio che questo Alert venga visualizzato "condizionalmente" */}

              {
                // operatore SHORT CIRCUIT &&
                this.state.reservation.name === 'Gianni Morandi' && (
                  <Alert variant="success">Bel nome!</Alert>
                )
              }

              <Form.Group className="mb-3">
                <Form.Label>Il tuo recapito telefonico</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="xxxxxxxxx"
                  value={this.state.reservation.phone}
                  onChange={(e) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        phone: e.target.value,
                      },
                    })
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>In quanti siete?</Form.Label>
                <Form.Select
                  aria-label="Quantità"
                  value={this.state.reservation.numberOfPeople}
                  onChange={(e) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        numberOfPeople: e.target.value,
                      },
                    })
                  }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Tavolo fumatori?"
                  checked={this.state.reservation.smoking}
                  onChange={(e) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        smoking: e.target.checked,
                        // le checkbox restituiscono un valore booleano NON con target.value ma con target.checked
                      },
                    })
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Per quando?</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={this.state.reservation.dateTime}
                  onChange={(e) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        dateTime: e.target.value,
                      },
                    })
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Note particolari?</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Allergie, intolleranze, etc."
                  value={this.state.reservation.specialRequests}
                  onChange={(e) => {
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        specialRequests: e.target.value,
                      },
                    })
                  }}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ReservationForm
