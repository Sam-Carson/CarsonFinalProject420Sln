using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarsonFinalProject.Controllers
{
    public class NSOController : ApiController
    {
        NightSkyObservatoryEntitiesConnection db = new NightSkyObservatoryEntitiesConnection();

        // Fill UFO dropdown menu 
        [HttpGet]
        [Route("api/nso/state")]
        public IEnumerable<object> GetStates()
        {
            var UFOMenuQuery =
                (from ufo in db.UFOes
                 orderby ufo.State ascending
                 select new
                 {
                     ufo.State
                 });
            var ufoState = UFOMenuQuery.Distinct().ToList();
            return ufoState;
        }

        [HttpGet]
        [Route("api/nso/GetUFOsByState")]
        public IHttpActionResult GetUFOsByState(string id)
        {
            try
            {
                var stateUFOQuery = from ufo in db.UFOes
                                    join year in db.Years on ufo.YearID equals year.YearID
                                    where ufo.State == id
                                    //group new { ufo, year } by ufo.State into ufoStateGroup
                                    select new
                                    {
                                        UFO = ufo.UFOID,
                                        Year = ufo.Year.Year1,
                                        City = ufo.City,
                                        Shape = ufo.Shape,
                                        Duration = ufo.Duration,
                                    };
                return Ok(stateUFOQuery);
            }
            catch (Exception)
            {
                return NotFound();
            }
        }

        //-------------------------------------------------------------------

        // Fill Meteorite dropdown menu 
        [HttpGet]
        [Route("api/nso/classification")]
        public IEnumerable<object> GetClassifications()
        {
            var MeteoriteClassificationQuery =
                from meteorite in db.Meteorites
                orderby meteorite.Classification ascending
                select new
                {
                    meteorite.Classification
                };
            var MeteoriteClassification = MeteoriteClassificationQuery;
            return MeteoriteClassification.Distinct().ToList();
        }

        [HttpGet]
        [Route("api/nso/meteoriteclassification")]
        public IHttpActionResult GetMeteoriteByClassification(string classification)
        {
            try
            {
                var MeteoriteQuery = from met in db.Meteorites
                                     join fall in db.Falls on met.FallID equals fall.FallID
                                     join year in db.Years on met.YearID equals year.YearID
                                     where met.Classification == classification
                                     //group new { ufo, year } by ufo.State into ufoStateGroup
                                     select new
                                     {
                                         met.Name,
                                         fall.Fall1,
                                         met.Mass,
                                         year.Year1
                                     };
                return Ok(MeteoriteQuery);
            }
            catch (Exception)
            {
                return NotFound();
            }
        }

        //-------------------------------------------------------------------
        // Fill Year dropdown menu 
        [HttpGet]
        [Route("api/nso/year")]
        public IEnumerable<object> GetYears()
        {
            var YearQuery =
                from years in db.Years
                orderby years.Year1 descending
                select new
                {
                    years.Year1
                };

            var Years = YearQuery;
            return Years.Distinct().ToList();
        }

    }
}
