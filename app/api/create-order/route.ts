import Razorpay from 'razorpay';
import { NextRequest, NextResponse } from 'next/server';

interface CreateOrderRequestBody {
  amount: number;
}

export async function POST(req: NextRequest) {
  try {
    const body: CreateOrderRequestBody = await req.json(); // Parse the JSON body

    // Initialize Razorpay instance
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,     // Store Key ID in environment variable
      key_secret: process.env.RAZORPAY_KEY_SECRET!, // Store Key Secret in environment variable
    });

    const options = {
      amount: body.amount * 100,  // Convert to smallest currency unit (paise for INR)
      currency: 'INR',
      receipt: 'order_rcptid_11',
    };

    const order = await razorpay.orders.create(options);
    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
