import { NextRequest, NextResponse } from 'next/server';
import { getCar } from '../../carModel';

type Params = {
  params: { carId: string };
};
// http://localhost:3005/api/cars/1
export const GET = async (req: NextRequest, { params }: Params) => {

  try {
    const car = await getCar(params.carId);
    if (!car) {
      return NextResponse.json(
        {
          message: `No car with id of ${params.carId}`,
          success: false,
        },
        { status: 404, statusText: 'Not found' }
      );
    }
    return NextResponse.json({
      data: car,
      message: 'Successful',
      success: true,
    });

  } catch (error) {
    return NextResponse.json(
      { message: 'server error', success: false },
      { status: 500, statusText: 'internal server error' }
    );
  }
};
