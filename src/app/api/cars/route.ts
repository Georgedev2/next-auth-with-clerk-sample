import { NextResponse } from 'next/server';
import { getCars } from '../carModel';

//  http://localhost:3005/api/cars
export async function GET() {
  try {
    const listOfCar = await getCars();
    return NextResponse.json(listOfCar);
  } catch (error) {
    return NextResponse.json(
      { message: 'server error', success: false },
      { status: 500, statusText: 'internal server error' }
    );
  }
}
