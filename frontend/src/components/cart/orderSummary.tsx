interface Props {
    subtotal: number;
    textColor?: string;
}

export default function OrderSummary({
    subtotal,
    textColor = 'black', //기본값 설정
}: Props) {
    const tax = 7;
    const shipping = subtotal >= 100 ? 0 : 25;
    let sum = 0;
    const total = subtotal + shipping + tax;

    return (
        <>
            <ul className="list-unstyled">
                <li className="mt-2">
                    <div className="d-flex justify-content-between">
                        <p style={{ color: textColor }}>Subtotal</p>
                        <p style={{ color: textColor, fontWeight: 'bold' }}>${subtotal.toLocaleString()}</p>
                    </div>
                </li>
                <li className="mt-2">
                    <div className="d-flex justify-content-between">
                        <p style={{ color: textColor }}>
                            Shipping estimate{' '}
                            <span data-bs-toggle="tooltip" data-bs-placement="top" title="More information related to shipping" data-container="body" data-animation="true">
                                <i className="fas fa-question-circle text-sm"></i>
                            </span>
                        </p>
                        <p style={{ color: textColor, fontWeight: 'bold' }}>${shipping.toLocaleString()}</p>
                    </div>
                </li>
                <li className="border-bottom mt-2">
                    <div className="d-flex justify-content-between">
                        <p style={{ color: textColor }}>
                            Tax estimate{' '}
                            <span
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="This may vary depending on the country you are in"
                                data-container="body"
                                data-animation="true"
                            >
                                <i className="fas fa-question-circle text-sm"></i>
                            </span>
                        </p>
                        <p style={{ color: textColor, fontWeight: 'bold' }}>${tax.toLocaleString()}</p>
                    </div>
                </li>
                <li className="mt-4">
                    <div className="d-flex justify-content-between">
                        <h5 style={{ color: textColor }}>Total</h5>
                        <h5 style={{ color: textColor }}>${total.toLocaleString()}</h5>
                    </div>
                </li>
            </ul>
        </>
    );
}
