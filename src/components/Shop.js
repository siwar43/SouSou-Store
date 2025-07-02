import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Shop.css';

function Shop() {
    return (
    <div>
      {/* Dresses */}
      <div className="dresses" style={{ padding: "50px 0" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Dresses</h2>
        <div className="container" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          <Card style={{ width: '18rem', marginBottom: '30px' }}>
            <Card.Img variant="top" src="https://images.showpo.com/dw/image/v2/BDPQ_PRD/on/demandware.static/-/Sites-sp-master-catalog/default/dwc14a5a9b/images/lindley-midi-dress-slide-neck-tie-back-slip-dress-FD24010018/Lindley_Midi_Dress_-_Slide_Neck_Tie_Back_Slip_Dress_in_Olive__5.jpg?sw=340&sh=544&strip=false" style={{ width: '100%', height: '300px' }} />
            <Card.Body>
              <Card.Title>Lindley Midi Dress - Halter Neck Linen Look Dress</Card.Title>
              <Card.Text>
                A timeless summer staple, the Lindley Midi Dress features a flattering halter neckline, an open tie-back design, and a breezy linen-look fabric.
              </Card.Text>
              <Button variant="primary">US$89.95</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', marginBottom: '30px' }}>
            <Card.Img variant="top" src="https://images.showpo.com/dw/image/v2/BDPQ_PRD/on/demandware.static/-/Sites-sp-master-catalog/default/dwf1e36324/images/norma-maxi-dress-halter-neck-sleeveless-dress-FD25060003/Norma_Maxi_Dress_-_Halter_Neck_Sleeveless_Dress_in_Soft_Pink_5.jpg?sw=340&sh=544&strip=false" style={{ width: '100%', height: '300px' }} />
            <Card.Body>
              <Card.Title>Norma Maxi Dress - Halter Neck Sleeveless Dress</Card.Title>
              <Card.Text>
                Flow with grace in the Norma Maxi Dress. Featuring a halter neckline and sleeveless design, this timeless silhouette is perfect for summer events.
              </Card.Text>
              <Button variant="primary">US$99.95</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', marginBottom: '30px' }}>
            <Card.Img variant="top" src="https://images.showpo.com/dw/image/v2/BDPQ_PRD/on/demandware.static/-/Sites-sp-master-catalog/default/dwaed0824e/images/stephanie-mini-dress-scoop-neck-pocket-detail-recycled-denim-mini-dress-SD25010045/Stephanie_Mini_Dress_-_Scoop_Neck_Pocket_Detail_Recycled_Denim_Mini_Dress_in_Indigo_Wash_0006.jpg?sw=340&sh=544&strip=false" style={{ width: '100%', height: '300px' }} />
            <Card.Body>
              <Card.Title>Stephanie Mini Dress - Scoop Denim Dress</Card.Title>
              <Card.Text>
                The Stephanie Mini Dress is a must-have denim piece with a modern scoop neckline and flattering mini length with a modern scoop neckline.
              </Card.Text>
              <Button variant="primary">US$89.95</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    
      {/* Accessories */}
      <div id="accessories" className="accessories" style={{ padding: "50px 0" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Accessories</h2>
        <div className="container" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          <Card style={{ width: '18rem', marginBottom: '30px' }}>
            <Card.Img variant="top" src="https://images.showpo.com/dw/image/v2/BDPQ_PRD/on/demandware.static/-/Sites-sp-master-catalog/default/dw53657e98/images/peta-and-jain-kori-belt-in-black-gold-1/_kori__4.jpg?sw=207&sh=336" style={{ width: '100%', height: '300px' }} />
            <Card.Body>
              <Card.Title>Peta and Jain - Kori Belt in Black Gold</Card.Title>
              <Card.Text>
                Add a bold finish to your outfit with the Kori Belt by Peta and Jain. Featuring sleek black faux leather and a striking gold buckle, it's the perfect accessory to cinch your waist and elevate any look.
              </Card.Text>
              <Button variant="primary">US$26.95</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', marginBottom: '30px' }}>
            <Card.Img variant="top" src="https://images.showpo.com/dw/image/v2/BDPQ_PRD/on/demandware.static/-/Sites-sp-master-catalog/default/dw823181c2/images/adaleen-double-hoop-earrings-FACJ23110007/01.01.23_-_FLATLAYS0033.JPG?sw=340&sh=544&strip=false" style={{ width: '100%', height: '300px' }} />
            <Card.Body>
              <Card.Title>Adaleen Double Hoop Earrings in Gold</Card.Title>
              <Card.Text>
                Elevate your everyday style with the Adaleen Double Hoop Earrings. Featuring a modern layered design and a luxe gold finish, they’re the perfect touch of elegance for both casual and dressy looks.
              </Card.Text>
              <Button variant="primary">US$24.95</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', marginBottom: '30px' }}>
            <Card.Img variant="top" src="https://images.showpo.com/dw/image/v2/BDPQ_PRD/on/demandware.static/-/Sites-sp-master-catalog/default/dwb89946f3/images/hendrix-multipack-bracelet-set-FACJ23060013/Hendrix_Multipack_Bracelet_Set_in_Gold.jpg?sw=340&sh=544&strip=false" style={{ width: '100%', height: '300px' }} />
            <Card.Body>
              <Card.Title>Hendrix Multipack Bracelet Set in Gold</Card.Title>
              <Card.Text>
                Complete your look with the Hendrix Bracelet Set. This gold-toned multipack features a mix of textures and designs, perfect for stacking or wearing solo for effortless elegance.
              </Card.Text>
              <Button variant="primary">US$21.95</Button>
            </Card.Body>
          </Card>

        </div>
      </div>
  </div>

    


    
    )
}

export default Shop