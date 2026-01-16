const request = require('supertest');
const app = require('./server');

describe('Tests de l\'application', () => {
    
    // Test Unitaire / Santé
    test('GET /health devrait retourner 200 OK', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('OK');
    });

    // Test E2E - Parcours fonctionnalité
    test('GET /api/data devrait retourner les données', async () => {
        const res = await request(app).get('/api/data');
        expect(res.statusCode).toBe(200);
        expect(res.body.data).toBeDefined();
    });
});