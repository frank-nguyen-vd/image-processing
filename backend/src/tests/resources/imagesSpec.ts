import supertest from 'supertest';
import * as sut from '../../index';

const request = supertest(sut.app);

describe('GET /images', () => {
    it('returns a list of images upon GET /api/v1/images', async () => {
        const response = await request.get('/api/v1/images');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThanOrEqual(1);
        expect(typeof response.body[0] === "object").toBeGreaterThanOrEqual(1);
    });

    it('returns a scaled image upon GET /api/v1/images?filename=sunrise', async () => {
        const response = await request.get('/api/v1/images?filename=sunrise');
        expect(response.status).toBe(201);        
    });

    it('returns a scaled image upon GET /api/v1/images?filename=sunrise&height=100', async () => {
        const response = await request.get(
            '/api/v1/images?filename=sunrise&height=100'
        );
        expect(response.status).toBe(201);        
    });

    it('returns a scaled image upon GET /api/v1/images?filename=sunrise&width=100', async () => {
        const response = await request.get(
            '/api/v1/images?filename=sunrise&width=100'
        );
        expect(response.status).toBe(201);        
    });

    it('returns an error upon GET /api/v1/images?filename=sunrise&width=100&height=-1', async () => {
        const response = await request.get(
            '/api/v1/images?filename=sunrise&width=100&height=-1'
        );
        expect(response.status).toBe(400);        
        expect(response.body.error).toBe(
            'Image dimensions must be non-negative integers'
        );
    });

    it('returns an error upon GET /api/v1/images?filename=sunrise&width=abc&height=100', async () => {
        const response = await request.get(
            '/api/v1/images?filename=sunrise&width=abc&height=100'
        );
        expect(response.status).toBe(400);        
        expect(response.body.error).toBe(
            'Image dimensions must be non-negative integers'
        );
    });

    it('returns an error upon GET /api/v1/images?filename=sunrise&width=100&height=abc', async () => {
        const response = await request.get(
            '/api/v1/images?filename=sunrise&height=abc&width=100'
        );
        expect(response.status).toBe(400);        
        expect(response.body.error).toBe(
            'Image dimensions must be non-negative integers'
        );
    });
});
