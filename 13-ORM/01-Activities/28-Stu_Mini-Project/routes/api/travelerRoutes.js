const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Traveler, Trips, Location } = require('../../models');

// GET all drivers
router.get('/', async (req, res) => {
    try {
        const travelerData = await Traveler.findAll({
            include: [{ model: Trips }, { model: Location }, { model: Traveler }],
            attributes: {
                include: [
                    [
                        sequelize.literal(
                            '(SELECT SUM(mileage) FROM car WHERE car.driver_id = driver.id)'
                        ),
                        'totalMileage',
                    ],
                ],
            },
        });
        res.status(200).json(travelerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single driver
router.get('/:id', async (req, res) => {
    try {
        const travelerData = await Traveler.findByPk(req.params.id, {
            include: [{ model: Trips }, { model: Location }, { model: Traveler }],
            attributes: {
                include: [
                    [
                        // Use plain SQL to add up the total mileage
                        sequelize.literal(
                            '(SELECT SUM(mileage) FROM car WHERE car.driver_id = driver.id)'
                        ),
                        'totalMileage',
                    ],
                ],
            },
        });

        if (!travelerData) {
            res.status(404).json({ message: 'No traveler found with that id!' });
            return;
        }

        res.status(200).json(travelerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
