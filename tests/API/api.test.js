const { test, expect } = require('@playwright/test');

test.describe('Restful API Validations', () => {
  let token;
  test.beforeAll(async ({ request }) => {
    // Create token
    const response = await request.post('https://restful-booker.herokuapp.com/auth', {
      data: {
        username: 'admin',
        password: 'password123',
      },
    });

    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody).toHaveProperty('token');
    token = responseBody.token;
  });

  test('should be able to get all bookings', async ({ request }) => {
    // Get all bookings
    const response = await request.get('https://restful-booker.herokuapp.com/booking');
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(responseBody).not.toEqual([]);
    expect(Array.isArray(responseBody)).toBeTruthy();

    // Verify all array elements should have booking ids
    responseBody.forEach((item) => {
      expect(item).toHaveProperty('bookingid');
    });
  });

  test('should be able to create a booking', async ({ request }) => {
    // Create booking
    const newBooking = {
      firstname: 'Jim',
      lastname: 'Brown',
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: '2028-01-01',
        checkout: '2029-01-05',
      },
      additionalneeds: 'Breakfast',
    };

    const response = await request.post('https://restful-booker.herokuapp.com/booking', {
      data: newBooking,
    });

    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody).not.toEqual({});
    expect(responseBody.booking.firstname).toBe('Jim');
    expect(responseBody.booking.lastname).toBe('Brown');
    expect(responseBody.booking.totalprice).toBe(111);
  });

  test('should be able to update a booking', async ({ request }) => {
    // Update a booking
    const updateBooking = {
      firstname: 'vaibhav',
      lastname: 'verma',
      totalprice: 100,
      depositpaid: true,
      bookingdates: {
        checkin: '2020-01-10',
        checkout: '2020-01-12',
      },
      additionalneeds: 'No Needs',
    };

    const response = await request.put(`https://restful-booker.herokuapp.com/booking/1`, {
      headers: {
        // Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM=',
        Cookie: `token=${token}`,
        Accept: 'application/json',
      },
      data: updateBooking,
    });

    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody).not.toEqual({});
  });

  test('should be able to partially update a booking', async ({ request }) => {
    // Partial update
    const partialUpdateBooking = {
      firstname: 'vav',
      lastname: 'verma',
    };

    const response = await request.patch(`https://restful-booker.herokuapp.com/booking/1`, {
      headers: {
        // Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM=',
        Cookie: `token=${token}`,
        Accept: 'application/json',
      },
      data: partialUpdateBooking,
    });

    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody).not.toEqual({});
  });

  test('should be able to delete a booking', async ({ request }) => {
    // Fetch a bookingId to delete
    const res = await request.get('https://restful-booker.herokuapp.com/booking');
    const resBody = await res.json();
    const bookingIdToDelete =  resBody[0].bookingid;

    // Delete booking
    const response = await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingIdToDelete}`, {
      headers: {
        // Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM=',
        Cookie: `token=${token}`,
      },
    });

    expect(response.status()).toBe(201);
  });
});
